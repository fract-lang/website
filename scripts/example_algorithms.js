const code_helloworld = `<keyword>package</keyword> <name>main</name>

<func>println</func>(<string>'Hello, 世界!'</string>)`

const code_fibonacci =
`<keyword>package</keyword> <name>main</name>

<keyword>func</keyword> <func>fib</func>(<name>a</name>, <name>b</name>) {
  <name>val</name> <operator>=</operator> <name>a</name> <operator>+</operator> <name>b</name>
  <func>println</func>(<name>val</name>)
  <keyword>if</keyword> <name>val</name> <operator><</operator> <numeric>1000</numeric> {
    <func>fib</func>(<name>b</name>, <name>val</name>)
  }
}

<func>fib</func>(<numeric>0</numeric>, <numeric>1</numeric>)`

const code_primecheck =
`<keyword>package</keyword> <name>main</name>

<keyword>func</keyword> <func>prime</func>(<name>x</name>) {
  <keyword>if</keyword> <name>x</name> <operator>==</operator> <numeric>2</numeric> {
    <keyword>return</keyword> <valkeyword>true</valkeyword>
  } <keyword>else if</keyword> <name>x</name> <operator><</operator> <numeric>2</numeric> <operator>||</operator> <name>x</name> <operator>%</operator> <numeric>2</numeric> <operator>==</operator> <numeric>0</numeric> {
    <keyword>return</keyword> <valkeyword>false</valkeyword>
  }
  <keyword>for</keyword> _, <name>y</name> <keyword>in</keyword> <func>range</func>(<numeric>2</numeric>, <name>x</name> <operator>-</operator> <numeric>1</numeric>) {
    <keyword>if</keyword> <name>x</name> <operator>%</operator> <name>y</name> <operator>==</operator> <numeric>0</numeric> {
      <keyword>return</keyword> <valkeyword>false</valkeyword>
    }
  }
  <keyword>return</keyword> <valkeyword>true</valkeyword>
}

<keyword>for</keyword> _, <name>i</name> <keyword>in</keyword> <func>range</func>(<numeric>2</numeric>, <numeric>100</numeric>) {
  <keyword>if</keyword> <func>prime</func>(<name>i</name>) {
    <func>println</func>(<name>i</name>)
  }
}`

const code_fizzbuzz =
`<keyword>package</keyword> <name>main</name>

<keyword>for</keyword> _, <name>number</name> <keyword>in</keyword> <func>range</func>(<numeric>1</numeric>, <numeric>100</numeric>) {
  <keyword>if</keyword> <name>number</name> <operator>%</operator> <numeric>3</numeric> <operator>==</operator> <numeric>0</numeric> <operator>&&</operator> <name>number</name> <operator>%</operator> <numeric>5</numeric> <operator>==</operator> <numeric>0</numeric> {
    <func>println</func>(<string>'FizzBuzz'</string>)
  } <keyword>else if</keyword> <name>number</name> <operator>%</operator> <numeric>3</numeric> <operator>==</operator> <numeric>0</numeric> {
    <func>println</func>(<string>'Fizz'</string>)
  } <keyword>else if</keyword> <name>number</name> <operator>%</operator> <numeric>5</numeric> <operator>==</operator> <numeric>0</numeric> {
    <func>println</func>(<string>'Buzz'</string>)
  } <keyword>else</keyword> {
    <func>println</func>(<name>number</name>)
  }
}`

const code_factorial =
`<keyword>package</keyword> <name>main</name>

<keyword>func</keyword> <func>fact</func>(<name>x</name>) {
  <keyword>if</keyword> <name>x</name> <operator><</operator> <numeric>0</numeric> {
    <keyword>return</keyword> <numeric>0</numeric>
  } <keyword>else if</keyword> <name>x</name> <operator>==</operator> <numeric>0</numeric> {
    <keyword>return</keyword> <numeric>1</numeric>
  }
  <keyword>return</keyword> <name>x</name> <operator>*</operator> <func>fact</func>(<name>x</name> <operator>-</operator> <numeric>1</numeric>)
}

<func>println</func>(<func>fact</func>(<numeric>12</numeric>))`

const code_listordering =
`<keyword>package</keyword> <name>main</name>

<keyword>func</keyword> <func>order</func>(<keyword>var</keyword> <name>lst</name>, <name>comparer</name><operator>=</operator><keyword>none</keyword>) {
  <name>length</name> <operator>=</operator> <name>lst</name>.<name>length</name>-<numeric>1</numeric>
  <keyword>for</keyword> <name>i</name> <keyword>in</keyword> <name>lst</name> {
    <name>j</name> <operator>=</operator> <numeric>0</numeric>
    <keyword>while</keyword> <name>j</name> <operator><</operator> <name>length</name>-<name>i</name> {
      <name>a</name>, <name>b</name> <operator>=</operator> <operator>&</operator><name>lst</name>[<name>j</name><operator>+</operator><numeric>1</numeric>], <operator>&</operator><name>lst</name>[<name>j</name>]
      <keyword>if</keyword> (<name>comparer</name> <operator>==</operator> <keyword>none</keyword> <operator>&&</operator>
        <operator>*</operator><name>a</name> <operator><</operator> <operator>*</operator><name>b</name> <operator>||</operator> <name>comparer</name> <operator>!=</operator> <keyword>none</keyword> <operator>&&</operator> <func>comparer</func>(<operator>*</operator><name>a</name>, <operator>*</operator><name>b</name>)) {
        <operator>*</operator><name>a</name>, <operator>*</operator><name>b</name> <operator>=</operator> <operator>*</operator><name>b</name>, <operator>*</operator><name>a</name>
      }
      <name>j</name><operator>++</operator>
    }
  }
  <keyword>return</keyword> <name>lst</name>
}

<name>myList</name> <operator>=</operator> [<numeric>9</numeric>, <numeric>2</numeric>, <numeric>56</numeric>, <numeric>3</numeric>, <numeric>3</numeric>, <numeric>2</numeric>, <numeric>7</numeric>, <numeric>537</numeric>, <numeric>36</numeric>, <numeric>5</numeric>]
<func>println</func>(<name>myList</name>)
<func>println</func>(<func>order</func>(<name>myList</name>, <keyword>func</keyword> (<name>x</name>, <name>y</name>) { <keyword>return</keyword> <name>x</name> <operator><</operator> <name>y</name> }))
<func>println</func>(<func>order</func>(<name>myList</name>, <keyword>func</keyword> (<name>x</name>, <name>y</name>) { <keyword>return</keyword> <name>x</name> <operator>></operator> <name>y</name> }))`

const codeblock            = document.getElementById('algorithm_example_block')
const example_helloworld   = document.getElementById('example_helloworld')
const example_fibonacci    = document.getElementById('example_fibonacci')
const example_primecheck   = document.getElementById('example_primecheck')
const example_fizzbuzz     = document.getElementById('example_fizzbuzz')
const example_factorial    = document.getElementById('example_factorial')
const example_listordering = document.getElementById('example_listordering')

codeblock.innerHTML = code_helloworld

example_helloworld.addEventListener('click', function() {
  codeblock.innerHTML = code_helloworld
})

example_fibonacci.addEventListener('click', function() {
  codeblock.innerHTML = code_fibonacci
})

example_primecheck.addEventListener('click', function() {
  codeblock.innerHTML = code_primecheck
})

example_fizzbuzz.addEventListener('click', function() {
  codeblock.innerHTML = code_fizzbuzz
})

example_factorial.addEventListener('click', function() {
  codeblock.innerHTML = code_factorial
})

example_listordering.addEventListener('click', function() {
  codeblock.innerHTML = code_listordering
})
