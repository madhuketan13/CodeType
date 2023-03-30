const paragraphs = {
    "javascript": {
      1: "console.log('Hello, World!');",
      2: "let x = 5;\nlet y = 10;\nconsole.log(x + y);",
      3: "let name = 'John';\nlet age = 30;\nlet message = `My name is ${name} and I am ${age} years old.`;\nconsole.log(message);",
      4: "function sum(a, b) {\n  return a + b;\n}\nconsole.log(sum(5, 10));",
      5: "let numbers = [1, 2, 3, 4, 5];\nlet doubled = numbers.map(num => num * 2);\nconsole.log(doubled);",
      6: "let person = {\n  name: 'John',\n  age: 30,\n  hobbies: ['reading', 'coding', 'hiking']\n};\nconsole.log(person.name);\nconsole.log(person.hobbies[1]);"
    },
    "python": {
      1: "print('Hello, World!')",
      2: "x = 5\ny = 10\nprint(x + y)",
      3: "name = 'John'\nage = 30\nmessage = f'My name is {name} and I am {age} years old.'\nprint(message)",
      4: "def sum(a, b):\n  return a + b\nprint(sum(5, 10))",
      5: "numbers = [1, 2, 3, 4, 5]\ndoubled = list(map(lambda num: num * 2, numbers))\nprint(doubled)",
      6: "person = {\n  'name': 'John',\n  'age': 30,\n  'hobbies': ['reading', 'coding', 'hiking']\n}\nprint(person['name'])\nprint(person['hobbies'][1])"
    },
    "java": {
      1: "System.out.println('Hello, World!');",
      2: "int x = 5;\nint y = 10;\nSystem.out.println(x + y);",
      3: "String name = 'John';\nint age = 30;\nString message = 'My name is ' + name + ' and I am ' + age + ' years old.';\nSystem.out.println(message);",
      4: "public static int sum(int a, int b) {\n  return a + b;\n}\nSystem.out.println(sum(5, 10));",
      5: "int[] numbers = {1, 2, 3, 4, 5};\nint[] doubled = Arrays.stream(numbers).map(num -> num * 2).toArray();\nSystem.out.println(Arrays.toString(doubled));",
      6: "Map<String, Object> person = new HashMap<>();\nperson.put('name', 'John');\nperson.put('age', 30);\nperson.put('hobbies', new ArrayList<>(Arrays.asList('reading', 'coding', 'hiking')));\nSystem.out.println(person.get('name'));\nSystem.out.println(((List<String>) person.get('hobbies')).get(1));"
    },
    "c#": {
      1: "Console.WriteLine('Hello, World!');",
      2: "int x = 5;\nint y = 10;\nConsole.WriteLine(x + y);",
      3: "string name = 'John';\nint age = 30;\nstring message = $'My name is {name} and I am {age} years old.';\nConsole.WriteLine(message);",
      4: "int Sum(int a, int b)\n{\n return a + b;\n}\nConsole.WriteLine(Sum(5, 10));",
      5: "int[] numbers = new int[] { 1, 2, 3, 4, 5 };\nvar doubled = numbers.Select(num => num * 2).ToArray();\nConsole.WriteLine(string.Join(',', doubled));", 
      6: "var person = new { Name = 'John', Age = 30, Hobbies = new string[] { 'reading', 'coding', 'hiking' } };\nConsole.WriteLine(person.Name);\nConsole.WriteLine(person.Hobbies[1]);"
      },
    
  };