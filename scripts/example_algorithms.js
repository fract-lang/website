const code_helloworld = `print('Hello, 世界!')`
const code_fibonacci =
`func fib(a, b)
    var val = a + b
    print(val)
    if val < 1000
        fib(b, val)
    end
end

fib(0, 1)
`
const code_primecheck =
`func prime(x)
    if x == 2
        ret true
    elif x < 2 || x % 2 == 0
        ret false
    end
    for _, y in range(2, x - 1)
        if x % y == 0
            ret false
        end
    end
    ret true
end

for _, i in range(2, 100)
    if prime(i)
        print(i)
    end
end
`
const code_fizzbuzz =
`for _, number in range(1, 100)
    if number % 3 == 0 && number % 5 == 0
        print('FizzBuzz')
    elif number % 3 == 0
        print('Fizz')
    elif number % 5 == 0
        print('Buzz')
    else
        print(number)
    end
end
`
const code_factorial =
`func fact(x)
    if x < 0
        ret NaN
    elif x == 0
        ret 1
    end
    ret x * fact(x - 1)
end

print(fact(12))
`
const code_hellocountries =
`func hello(...countries)
    print('Hello', fin='')
    for _, c in countries
        print(', ', fin=c)
    end
    print('!')
end

hello('Turkey', 'France', 'German', 'Japan', 'Canada')
`

const codeblock = document.getElementById('algorithm_example_block')

codeblock.textContent = code_helloworld

document.getElementById('example_helloworld').addEventListener('click', function() {
	codeblock.textContent = code_helloworld
})

document.getElementById('example_fibonacci').addEventListener('click', function() {
	codeblock.textContent = code_fibonacci
})

document.getElementById('example_primecheck').addEventListener('click', function() {
	codeblock.textContent = code_primecheck
})

document.getElementById('example_fizzbuzz').addEventListener('click', function() {
	codeblock.textContent = code_fizzbuzz
})

document.getElementById('example_factorial').addEventListener('click', function() {
	codeblock.textContent = code_factorial
})

document.getElementById('example_hellocountries').addEventListener('click', function() {
	codeblock.textContent = code_hellocountries
})
