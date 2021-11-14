# Lab 8 - Starter
### Zhenyi Chen
- Link to repo: https://github.com/JennyNo007/Lab8_Starter
- Pages: https://jennyno007.github.io/Lab8_Starter/

### "Check Your Understanding" questions
1. Where would you fit your automated tests in your Recipe project development pipeline?
  * Within a Github action that runs whenever code is pushed 
  * Manually run them locally before pushing code
  * Run them all after all development is completed
- __I would choose the second option since it is the most convenient way for me to test my code by successfully running locally before pushing to the repo.__

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)
- __Yes. Since the E2E testing is the best way to automatically simulate user behavior step by step with clear action patterns instead of randomly testing by clicking around some of the functions. It saves time and makes direct actions by instructions.__

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
- __Yes, I would use a unit test to test the "message" feature since the feature "message" consists of different elemenets and requirements. Then, it would need a lots of independent unit tests to test through the feature. For example, test the length of the message, the content of the message to exclude some special symbols, the language selected to input, etc. __

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
- __Yes, I would use unit test to test the "max_message length" since it is independent from the other features which decreases the risk of making mistakes mingling with the other features. But the "max message length" feature should be included by the unit test of "message" feature above since the length of the message is a requirement of message feature.__
