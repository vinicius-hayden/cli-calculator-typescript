import { question } from "readline-sync";

type Operator = '+' | '-'| '*' | '/';

function main(): void
{
    const firstStr: string = question('Enter first number:\n')
    const operator: string = question ('Enter operator:\n');
    const secondStr: string = question ('Enter second number:\n');

    const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

    if(validInput)
    {
        const firstNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondStr);
        const result = calculate(firstNum, operator as Operator, secondNum);
        console.log(`The result is ${result}.`);
    }
    else{
        console.log('\nInvalid Input\n')
        main();
    }
}

function isNumber(str: string): boolean
{
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}

function isOperator(operator: string): boolean
{
    switch(operator)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}

function calculate(firstNum: number, operator: string, secondNum: number)
{
    if(operator == '+')
    {
        return firstNum + secondNum;
    }
    else if(operator == '-')
    {
        return firstNum - secondNum;
    }
    else if(operator == '*')
    {
        return firstNum  * secondNum;
    }
    else if(operator == '/')
    {
        return firstNum/secondNum;
    }
}

main();