from openai import OpenAI
from dotenv import load_dotenv
import os

class Chatbot():

  def __init__(self):
    self.system_prompt = "You are an expert trained on healthcare and biomedical domain! Give concise answers when the user asks questions. Based on their symptoms, tell them to either book an appointment with their GP, go to an Urgent care Centre or A&E. You should also give them a explaination on what they should tell their doctor based on their symptoms."
    self.medications = []
    load_dotenv()

    self.client = OpenAI(
      base_url="https://openrouter.ai/api/v1",
      api_key= os.getenv("API_KEY"),
    )
    self.add_medication("Ibuprofen")

  def update_prompt(self):
    if self.medications:
      medication_text = "You should take into account the medication they take, which includes: " + ", ".join(self.medications) + "."
      self.system_prompt = self.system_prompt + " " + medication_text
      print(self.system_prompt)

  def add_medication(self, medication):
    self.medications.append(medication)

  def remove_medication(self, med_to_remove):
    self.medications.remove(med_to_remove)
  
  def run_question(self, question):
    self.update_prompt()
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
  
