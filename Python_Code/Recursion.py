"""
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)


Num = int(input("Enter the number: "))
print("Factorial of given number is", factorial(Num))
"""

"""
def fibonacci(n):
    if n == 0 or n == 1:
        return n
    else:
        return (fibonacci(n - 1) + fibonacci(n - 2))

Num = int(input("Enter the number: "))
print("Fibonacci number is", fibonacci(Num))
print("Fibonacci series:")
for i in range(Num):
    print(fibonacci(i))
"""

"""
def printNum(n):
    if n == 0:
        return
    printNum(n-1)
    print(n)

printNum(5)

def printNum(n):
    if n == 0:
        return
    print(n)
    printNum(n-1)


printNum(5)
"""
"""
def reverse_string(S):
    if len(S) == 0:
        return S
    else:
        return reverse_string(S[1:]) + S[0]
String = str(input("Enter the string: "))
print(reverse_string(String))
"""
"""
def power(x, y):
    if y == 1:
        return x
    if y!= 1:
        return (x * power(x, y-1))

a = int(input("Enter the number: "))
b = int(input("Enter the number: "))
print(power(a,b))
"""
"""
def power(x, y):
    if y ==0:
      return 1
    if y ==0 :
      return x
    ans = power(x, y/2)
    if y%2==0:
        return ans *ans
    else:
        return x * ans * ans
a = int(input("Enter the number: "))
b = int(input("Enter the number: "))
print(power(a,b))
"""


class LLNode:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None


    def append(self, data):
        new_node = LLNode(data)
        if self.head is None:
            self.head = new_node
        else:
            temp = self.head
            while temp.next:
                temp = temp.next
            temp.next = new_node

    def printNode(self):
        temp = self.head
        while temp:
            print(temp.data)
            temp = temp.next

    def reverse(self,head):
        if head == None or head.next == None:
            self.head= head
            return
        new_head=self.reverse(head.next)
        temp = head.next
        temp.next = head
        head.next = None
        return new_head



l1 = LinkedList()
l1.append(100)
l1.append(200)
l1.append(300)
l1.append(400)
l1.append(500)
l1.append(600)
l1.append(700)
l1.reverse(l1.head)
l1.printNode()