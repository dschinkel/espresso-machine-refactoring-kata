espresso machine refactoring kata
=================================
![Image of an espresso machine with UI](https://github.com/dschinkel/espresso-machine-refactoring-kata/blob/master/espresso-machine-with-ui.jpg)

In this kata we have hypothetical source code behind an espresso machine's touch based UI expressed in one **big messy module** called **EspressoMachine**.

*Your job is to perform the following in this order:*
1. **Write integration tests** around the messy legacy code to gain confidence before refactorin

    - this step is for more advanced testing IMO.  If you're a beginner with tests #1 & #2 can be optional, it might be too much to take on at first and that's fine.  If so then just implement the refactoring for now and revisit #3 later.

2. **Refactor it** using [SOLID Principles](http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod)

3. **Add new features** via TDD to extend the code that now adhere's to SOLID