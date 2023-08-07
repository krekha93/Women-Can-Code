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

    def insert_at(self, data, position):
        new_node = LLNode(data)
        if self.head is None:
            self.head = new_node
        else:
            temp = self.head
            count = 1
            while temp and count < position - 1:
                temp = temp.next
                count += 1
            new_node.next = temp.next
            temp.next = new_node

    def reverse(self):
        prev = None
        next = None
        curr = self.head
        while curr:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        self.head = prev

    def delete_at(self, position):
        temp = self.head.next
        prev = self.head
        count = 1
        while temp and count < position - 1:
            temp = temp.next
            prev = prev.next
            count += 1
        prev.next = temp.next
        temp.next = None

    def search(self, key):
        temp = self.head
        flag = 0
        index = 0
        while temp:
            if temp.data == key:
                print(str(key) + ' is at index ' + str(index))
                flag = 1
            temp = temp.next
            index += 1
        if flag == 0:
            print(key, "is not present")

    def nth_node_end(self, position):
        temp = self.head
        count = 0
        while temp:
            count = count + 1
            temp = temp.next
        temp = self.head
        n = 0
        while n < count - position:
            n = n + 1
            temp = temp.next
        print(temp.data)

    def circle_in_list(self):
        temp1 = self.head
        temp2 = self.head
        while temp2 and temp2.next:
            temp1 = temp1.next
            temp2 = temp2.next.next
            if temp1 == temp2:
                print("Linked List is a circular list")
        print("Linked List is not a circular list")

    def reverse_pair(self):
        curr = self.head.next.next
        prev = self.head
        self.head = self.head.next
        self.head.next = prev
        while curr != None and curr.next != None:
            prev.next = curr.next
            prev = curr
            temp = curr.next.next
            curr.next.next = curr
            curr = temp
        prev.next = curr

    def printNode(self):
        temp = self.head
        while temp:
            print(temp.data)
            temp = temp.next

    def middleNode(self, head):
        if self.head == None:
            return self.head

        count = 0
        temp1 = self.head
        while temp1 != None:
            temp1 = temp1.next;
            count += 1;
        mid = count // 2 + 1
        temp2 = self.head
        for i in range(1, mid):
            temp2 = temp2.next
        print(temp2.data)


l1 = LinkedList()
l1.append(100)
l1.append(200)
l1.append(300)
l1.append(400)
l1.append(500)
l1.append(600)
l1.append(700)
# l1.insert_at(600, 3)
# l1.insert_at(1000, 4)
# l1.reverse()
# l1.delete_at(4)
# l1.search(500)
l1.nth_node_end(3)
# l1.circle_in_list()
# l1.reverse_pair()

l1.printNode()
# l1.middleNode(100)
