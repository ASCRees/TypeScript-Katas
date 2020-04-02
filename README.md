# Typescript-Katas

> This contains a number of typescript scripts that were created to solve some simple Katas

## alphabet_number_kata

> This function takes a string and returns the position in the alphabet for each letter. It ignores anything that is not a letter.
>
> Calling the following :-
>
>      numberise("abcd efg %hi^ jk* lmn (opq) rstuv wxyz.")
>
> will return
>
>      1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26

![image](https://user-images.githubusercontent.com/28151071/77850679-089d1200-71cc-11ea-9aa6-186702e61cc4.png)

## christmas_tree

> Generates a christmas tree using \* based upon a given number of rows.

![image](https://user-images.githubusercontent.com/28151071/77850704-28ccd100-71cc-11ea-83b3-ab764c7071b8.png)

## curried_function

> This shows an example of a type of function that accepts multiple parameters, one parameter at a time and returns a function after each parameter to accept the next parameter.

![image](https://user-images.githubusercontent.com/28151071/77850720-4306af00-71cc-11ea-9f28-756b1f27df6a.png)

## morse_code_translator

> This takes a string of text and converts it to morse code or vice versa.
> Calling the function morse.convertToMorseCode will convert a string to morse code.
> Calling morse.convertFromMorseCode will convert from morse code to the original string.

![image](https://user-images.githubusercontent.com/28151071/77850743-5f0a5080-71cc-11ea-81ee-32da24ea192a.png)

## pig_latin

> Returns a given string in pig latin.
> Take the first letter of each word of the string and put it on the end then add "ay"
> So "Hello" would become "elloHay"

![image](https://user-images.githubusercontent.com/28151071/77850763-78130180-71cc-11ea-9cbd-56202529976b.png)

## sumofdigits_recursion

> This function takes a number and sums the digits then recursively reduces it to a single digit.
> For example start with 132189 and then sums the digits to get 24.
> As 24 is not a single digit these digits are summed to get 6.

![image](https://user-images.githubusercontent.com/28151071/77850775-911bb280-71cc-11ea-9338-2218bb0cf976.png)

## sumofeverydigit

> Take a number and then sums every digit in the number.
> So 123 would sum
> 1+2, 1+3, 2+3
> To give 3,4,5

![image](https://user-images.githubusercontent.com/28151071/77850874-56664a00-71cd-11ea-83aa-2189e4dc3107.png)

## telephone_number

> Takes an 10 digit number and outputs it formatted as a US telephone number.
> For example 1234567890 would return (123) 456-7890

![image](https://user-images.githubusercontent.com/28151071/77850914-975e5e80-71cd-11ea-8660-b42d06e4b6f6.png)

## Example of using typescript.

> Make sure there is tsconfig.json

> Make sure terminal is using a Command Prompt window as the default shell and then press CTRL SHIFT and B. Do not have Bash as the default shell.

> Select

> tsc: build -tsconfig.json

> Then

> tsc: watch -tsconfig.json

## Running the scripts

> Each of thee scripts can be run using node.js
> For example in powershell window execute
> node pig_latin
