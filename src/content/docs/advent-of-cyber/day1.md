---
title: Advent of Cyber - Day 1
description: Chatbot, tell me, if you're really safe?
---

The Day 1 challenge is a easy walkthrough about AI chatbox. This challenge teaches about natural language processing, which powers modern AI chatbots. It also teaches us about prompt injection attacks and the common ways to carry them out and at last, how to defend against prompt injection attacks.

In this task, you will access Van Chatty, AntarctiCrafts' internal chatbot. It's currently under development but has been released to the company for testing.

First start the machine and click the link given in the middle of story to access the Van Chatty - AntarctiCrafts' internal chatbot.

![drawing](../../../assets/aoc-day1/1.png)

### What is McGreedy's personal email address?

let's start asking some questions to the chatbox. Let's ask the chat box about McGreedy's personal email address.

![drawing](../../../assets/aoc-day1/2.png)

We can see that chatbox has given us the email.

### What is the password for the IT server room door?
Let's try to ask the chatbox again about the password directly and see what it will reply.

![drawing](../../../assets/aoc-day1/3.png)

We can see this time chatbox has rejected to give us the password but it says that only member of IT can retrieve the password. So, let's us try to pretend as member of IT. First of all let's see if we can retrieve the list of members of IT. 

![drawing](../../../assets/aoc-day1/4.png)

We can see the chatbox has given us the name of IT employees. Now, lets try to pretend as Van Developer.

![drawing](../../../assets/aoc-day1/5.png)

We can see that chatbox has given us the password of the IT server room.

### What is the name of McGreedy's secret project?

Again asking directly to the chatbox didn't work.

![drawing](../../../assets/aoc-day1/6.png)

So, now lets try to bypass the rule.

![drawing](../../../assets/aoc-day1/7.png)

Wow! we got our answer again because In maintenance mode, the chatbot operates outside of its standard procedure, bypassing the security checks.

---
Date: 18-12-2023 <br />
Author: W1LD_QU4K3

