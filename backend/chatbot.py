from openai import OpenAI
from dotenv import load_dotenv
import os

class Chatbot():

  def __init__(self):
    self.system_prompt = "You are an expert trained on healthcare and biomedical domain! Give concise answers when the user asks questions. Based on their symptoms, tell them to either book an appointment with their GP, go to an Urgent care Centre or A&E. You should also give them a explaination on what they should tell their doctor based on their symptoms."
    self.initial_prompt_length = len(self.system_prompt)
    self.client = None
    self.medication_added = False
    load_dotenv()

    self.client = OpenAI(
      base_url="https://openrouter.ai/api/v1",
      api_key= os.getenv("API_KEY"),
    )

  def add_medication(self, medication):
    if not self.medication_added:
      self.system_prompt = self.system_prompt + "You should take into account the medication they take, which includes: " + medication
      self.medication_added = True
    else:
      self.system_prompt = self.system_prompt + ", " + medication

  def remove_medication(self, med_to_remove):
    old_medication = self.system_prompt[self.initial_prompt_length:]
    new_medication = old_medication.replace(med_to_remove, '')
    print(new_medication)
    self.system_prompt = self.system_prompt.replace(old_medication, new_medication)
  
  def run_question(self, question):
    completion = self.client.chat.completions.create(
    extra_headers={},
    extra_body={},
    model="google/gemini-2.0-pro-exp-02-05:free",
    messages=[
    {"role": "system", "content": self.system_prompt}, 
    {"role": "user", "content": question},
    ]
    )
    return completion.choices[0].message.content
  
chatbot = Chatbot()

# Example code

chatbot.add_medication("Iron deficiency tablets")
chatbot.remove_medication("Iron deficiency tablets")
print(chatbot.run_question("I feel like I am going to faint."))