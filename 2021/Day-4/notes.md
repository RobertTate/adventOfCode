I am given:

- A random set of boards, each is 5x5 in size.

- A random list of numbers drawn.

From this, I need to:

- Update each board with the number drawn
  * to do this I'll probably need to create a more stateful data structure out of what we're given.

- check for a winner after each number drawn (maybe don't need to start checking until the 5th number)

A winner is found if that board has either:
- A filled in row
- A filled in column

Once a winner is found, I need to: 
- sum up all the values that were not filled in
- multiply it by the last drawn number, the one that triggered the win.