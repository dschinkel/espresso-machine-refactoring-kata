espresso machine refactoring kata
=================================
![Image of an espresso machine with UI](https://github.com/dschinkel/espresso-machine-refactoring-kata/blob/master/espresso-machine-with-ui.jpg)

In this kata we have hypothetical source code behind an espresso machine's touch based UI whos underlying behavior expressed in one **big messy module** called **EspressoMachine**.

When we say **messy** it means all sorts of things:
- Doesn't adhere to SOLID
- is not [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) (naming of functions, variables, size of functions, and more)
- doesn't take into account 4 Rules of Simple Design practices

*Your job is to perform the following in this order:*
1. **Write integration tests** around the messy legacy code to gain confidence before refactoring

    - What's the point of this Step?
        - Well how do you know if the current code even works?  How do you know if when you start to refactor to SOLID that the changes you make works?
        - Because this step forces you to learn how to write tests over legacy code and just testing if you're new to it a well

2. **Refactor it** using [SOLID Principles](http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod) and [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) practices

    - What's the point of this Step?
        - Now that you have a little coverage hopefully from step 1, you can try to refactor.  Even a small level of test safety helps as you should start to see
        - To push yourself to learn SOLID principles
        - To push yourself to learn the [4 Rules of Simple Design](https://martinfowler.com/bliki/BeckDesignRules.html) by Kent Beck

3. **Add new features** via TDD to extend the code that now adhere's to SOLID

    - What's the point of this Step?
        - Now that you've learned a little about SOLID and Clean Code, try learning a bit of TDD'ing new features on top of it now
        - you should also see that now it's easier to find where to place stuff, where to add new behavior, and so on since you've completed step 2
