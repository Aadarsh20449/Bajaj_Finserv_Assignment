# 📌 Full Stack Assignment – VIT  

This repository contains the implementation of the **Full Stack Assignment (VIT)**.  
The task was to build and host a REST API that accepts an array as input and returns categorized results based on the given requirements.  

---

## 🔹 Objective  

- Build a REST API with **POST** method at route `/bfhl`.  
- The API should:  
  1. Return a success status.  
  2. Return `user_id` in the format: `<full_name_ddmmyyyy>` (full name lowercase + DOB).  
  3. Return email ID and roll number.  
  4. Categorize input into:  
     - Even numbers (as strings)  
     - Odd numbers (as strings)  
     - Alphabets (converted to uppercase)  
     - Special characters  
  5. Return the **sum of numbers** (as string).  
  6. Return a **concatenated string of all alphabets** in reverse order with alternating caps.  
- Handle errors gracefully and always return `is_success`.  

---

## 🔹 Tech Stack  

- **Backend Framework:** Node.js (Express.js)  
- **Hosting Platform:** Vercel / Railway / Render  
- **Version Control:** Git & GitHub  

---

## 🔹 API Endpoint  

**Method:** `POST`  
**Route:** `/bfhl`  

Example hosted URL:  https://your-hosted-api-url.com/bfhl?utm_source=chatgpt.com


---

## 🔹 Request Format  

Send a JSON object with key `"data"` containing an array:  

```json
{
  "data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
}
