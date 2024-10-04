/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate A Course Tutorial on following detail with field as Course Name, Description, along with Chapter Name, about, Duration: Category: 'Programming', Topic:'Python', Level: Basic, Duration: 1 hours, No of Chapters:5, in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"courseName\": \"Python Fundamentals: A Beginner's Guide\",\n  \"description\": \"This course introduces the fundamental concepts of Python programming, making it perfect for absolute beginners. You'll learn how to write your first Python programs, understand data types and variables, control program flow, and work with functions. By the end of this course, you'll have a solid foundation in Python programming, ready to tackle more advanced topics.\",\n  \"chapters\": [\n    {\n      \"name\": \"Introduction to Python\",\n      \"about\": \"Learn about the history of Python, its features, and why it's so popular. Set up your development environment and write your very first Python program.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"name\": \"Data Types and Variables\",\n      \"about\": \"Explore different data types in Python like integers, floats, strings, and booleans. Learn how to declare and assign values to variables, perform basic operations, and understand the importance of data types in programming.\",\n      \"duration\": \"25 minutes\"\n    },\n    {\n      \"name\": \"Control Flow Statements\",\n      \"about\": \"Master the power of control flow statements like if-else conditions and loops (for and while) to create programs that make decisions and repeat actions. Learn how to write code that responds to different input conditions.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"name\": \"Functions and Modules\",\n      \"about\": \"Understand the concept of functions to break down complex programs into smaller, reusable chunks of code. Learn how to define and call functions, pass arguments, and utilize built-in modules for common tasks.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"name\": \"Basic Input and Output\",\n      \"about\": \"Learn how to interact with the user by taking input using the `input()` function and displaying output using the `print()` function. Explore simple string formatting techniques.\",\n      \"duration\": \"10 minutes\"\n    }\n  ],\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"duration\": \"1 hour\",\n  \"numberOfChapters\": 5\n}\n```"},
          ],
        },
      ],
    });

    
      export const GenerateChapterContent_AI = model.startChat({
        generationConfig,
     // safetySettings: Adjust safety settings
     // See https://ai.google.dev/gemini-api/docs/safety-settings
        history: [
          {
            role: "user",
            parts: [
              {text: "Explain the concept in Detail on Topic: Python Basic, Chapter: Variables and Data Types, in JSON Format with list of array with field as title, explanation on given chapter in detail, Code Example(Code field in <precode> format) if applicable. eliminating unterminated string error."},
            ],
          },
          {
            role: "model",
            parts: [
              {text: "```json\n[\n  {\n    \"title\": \"Introduction to Variables\",\n    \"explanation\": \"Variables are like containers that store information in a program. They act as labels for data, allowing us to access and manipulate it easily. In Python, you can think of variables as names that refer to specific values.\",\n    \"code\": \"<precode>\\n# Assign the value 10 to a variable named 'age'\\nage = 10\\n\\n# Print the value stored in the 'age' variable\\nprint(age)\\n</precode>\"\n  },\n  {\n    \"title\": \"Data Types\",\n    \"explanation\": \"Data types define the kind of information a variable can hold. Python has several built-in data types, each with its own characteristics and purpose.\",\n    \"code\": \"<precode>\\n# Integer\\nage = 25\\n\\n# Float (decimal number)\\nprice = 19.99\\n\\n# String (text)\\nname = 'Alice'\\n\\n# Boolean (True or False)\\nis_student = True\\n</precode>\"\n  },\n  {\n    \"title\": \"Integer (int)\",\n    \"explanation\": \"Integers represent whole numbers without any fractional part, such as 10, -5, 0.\",\n    \"code\": \"<precode>\\nnumber = 100\\nprint(type(number))  # Output: <class 'int'>\\n</precode>\"\n  },\n  {\n    \"title\": \"Float (float)\",\n    \"explanation\": \"Floats represent decimal numbers, such as 3.14, -2.5, 0.0.\",\n    \"code\": \"<precode>\\npi = 3.14159\\nprint(type(pi))  # Output: <class 'float'>\\n</precode>\"\n  },\n  {\n    \"title\": \"String (str)\",\n    \"explanation\": \"Strings represent sequences of characters, enclosed in single or double quotes, such as 'Hello', \\\"World!\\\".\",\n    \"code\": \"<precode>\\nmessage = 'Hello, Python!'\\nprint(type(message))  # Output: <class 'str'>\\n</precode>\"\n  },\n  {\n    \"title\": \"Boolean (bool)\",\n    \"explanation\": \"Booleans represent truth values, either True or False.\",\n    \"code\": \"<precode>\\nis_active = True\\nprint(type(is_active))  # Output: <class 'bool'>\\n</precode>\"\n  },\n  {\n    \"title\": \"Variable Naming Conventions\",\n    \"explanation\": \"Python has specific rules for naming variables:\\n\\n* **Must start with a letter or underscore (_).**\\n* **Can contain letters, numbers, and underscores.**\\n* **Case-sensitive (age and Age are different).**\\n* **Avoid using reserved keywords (like 'if', 'for', 'while').**\",\n    \"code\": \"\"\n  },\n  {\n    \"title\": \"Variable Assignment\",\n    \"explanation\": \"You assign a value to a variable using the equal sign (=).\",\n    \"code\": \"<precode>\\n# Assign the value 20 to the variable 'age'\\nage = 20\\n\\n# Assign the string 'Python' to the variable 'language'\\nlanguage = 'Python'\\n</precode>\"\n  },\n  {\n    \"title\": \"Data Type Conversion\",\n    \"explanation\": \"You can convert data from one type to another using built-in functions:\",\n    \"code\": \"<precode>\\n# Convert a string to an integer\\nnumber = int('123')  \\n\\n# Convert an integer to a string\\ntext = str(456)  \\n\\n# Convert a string to a float\\ndecimal = float('3.14')  \\n</precode>\"\n  }\n]\n```"},
            ],
          },
        ],
      });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());

  
 