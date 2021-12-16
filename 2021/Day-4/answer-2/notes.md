# Part 2:

In this scenario, instead of stopping once I've found the 1st winning board, I need to keep going until I've found the last winning board. 

I think to do this, I'll just keep the loop going, and keep removing winners. When the numbers drawn are fully looped through, I should only have one board left in the array....presumably.

..it actually turned out that I ran out of boards before I ran out of numbers to draw. My main delay was not realizing that I needed to remove boards from the board array from the end to the front, otherwise this index would change while I was removing them, and I'd be removing the wrong ones.
