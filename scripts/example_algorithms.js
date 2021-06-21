const code_helloworld = `print("Hello 世界!")`
const code_fibonacci =
`func fib(n)
  var (
    count = 0
    a     = 0
    b     = 1
  )
  for count < n
    print(a, fin=" ")
    const c = a + b
    a = b
    b = c
    count += 1
  end
end

fib(15)
`
const code_primecheck =
`for _, x in range(2, 100)
  if x == 2
    print(x)
    continue
  elif x < 2 || x % 2 == 0
    continue
  end

  var prime = true
  for _, y in range(2, x - 1)
    if x % y == 0
      prime = false
      break
    end
  end
  if prime
    print(x)
  end
end
`
const code_fizzbuzz =
`for _, number in range(1, 100)
  if number % 3 == 0 && number % 5 == 0
    print("FizzBuzz")
  elif number % 3 == 0
    print("Fizz")
  elif number % 5 == 0
    print("Buzz")
  else
    print(number)
  end
end
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
