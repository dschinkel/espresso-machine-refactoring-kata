espresso machine refactoring kata
=================================
![Image of an espresso machine with UI](https://github.com/dschinkel/espresso-machine-refactoring-kata/blob/master/espresso-machine-with-ui.jpg)

In this kata we have hypothetical source code behind an espresso machine's touch based UI expressed in one **big messy module** called **EspressoMachine**.

When we say messy it means all sorts of things:
- Doesn't adhere to SOLID
- is not [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) (naming of functions, variables, size of functions, and more)

*Your job is to perform the following in this order:*
1. **Write integration tests** around the messy legacy code to gain confidence before refactoring

    - If you're a beginner with tests #1 can be optional but still do #3 after you refactor and get to know TDD

2. **Refactor it** using [SOLID Principles](http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod)

3. **Add new features** via TDD to extend the code that now adhere's to SOLID
    - *new features TBD (WIP)*
