from openai import OpenAI

client = OpenAI(
  base_url="https://openrouter.ai/api/v1",
  api_key="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",
)

completion = client.chat.completions.create(
  extra_headers={},
  extra_body={},
  model="google/gemini-2.0-pro-exp-02-05:free",
  messages=[
    {
        "role": "system", 
        "content": "You are an expert trained on healthcare and biomedical domain!"
     }, 
     {
        "role": "user", 
        "content": "I'm a 35-year-old male and for the past few months, I've been experiencing fatigue, increased sensitivity to cold, and dry, itchy skin. What is the diagnosis here?"}, ]
)
print(completion.choices[0].message.content)