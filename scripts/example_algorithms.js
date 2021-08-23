const code_helloworld = `package main

println('Hello, 世界!')`
const code_fibonacci =
`package main

func fib(a, b) {
  val = a + b
  println(val)
  if val < 1000 {
    fib(b, val)
  }
}

fib(0, 1)`
const code_primecheck =
`package main

func prime(x) {
  if x == 2 {
    return true
  } else if x < 2 || x % 2 == 0 {
    return false
  }
  foreach _, y in range(2, x - 1) {
    if x % y == 0 {
      return false
    }
  }
  return true
}

foreach _, i in range(2, 100) {
  if prime(i) {
    println(i)
  }
}`
const code_fizzbuzz =
`package main

foreach _, number in range(1, 100) {
  if number % 3 == 0 && number % 5 == 0 {
    println('FizzBuzz')
  } else if number % 3 == 0 {
    println('Fizz')
  } else if number % 5 == 0 {
    println('Buzz')
  } else {
    println(number)
  }
}`
const code_factorial =
`package main

func fact(x) {
  if x < 0 {
    return nan
  } else if x == 0 {
    return 1
  }
  return x * fact(x - 1)
}

println(fact(12))`
const code_hellocountries =
`package main

func hello(...countries) {
  print('Hello')
  foreach _, c in countries {
    print(', ', c)
  }
  println('!')
}

hello('Turkey', 'France', 'German', 'Japan', 'Canada')`

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
