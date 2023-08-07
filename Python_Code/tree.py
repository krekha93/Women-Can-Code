class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


def newNode(data):
    node = Node(data)
    return node


def identicalTree(root1, root2):
    if root1 == None and root2 == None:
        return True;
    if root1 != None and root2 != None:
        left = identicalTree(root1.left, root2.left)
        right = identicalTree(root1.right, root2.right)
        return ((root1.data == root2.data) and left and right)


def MirrorTree(root1, root3):
    if root1 == None and root3 == None:
        return True;
    if root1 != None and root3 != None:
        left = MirrorTree(root1.left, root3.right)
        right = MirrorTree(root1.right, root3.left)
        return ((root1.data == root3.data) and left and right)


def sum(root):
    if root is None:
        return 0
    else:
        left = sum(root.left)
        right = sum(root.right)
        return (root.data + left + right)


def height(root):
    if root is None:
        return 0
    else:
        left = height(root.left)
        right = height(root.right)
        return 1 + max(left, right)


def treemax(root):
    if root is None:
        return 0
    else:
        leftmax = treemax(root.left)
        rightmax = treemax(root.right)
        return max(root.data, leftmax, rightmax)


def existinTree(root1, value):
    if root1 == None:
        return False;
    else:
        existinleft = existinTree(root1.left, value)
        existinright = existinTree(root1.right, value)
        return root1.data == value or existinleft or existinright


def mirror(root1):
    if root1 == None:
        return;
    else:
        mirror(root1.left)
        mirror(root1.right)
        root1.left, root1.right = root1.right, root1.left


def printpreorder(root1):
    if root1 == None:
        return
    else:
        print(root1.data)
        printpreorder(root1.left)
        printpreorder(root1.right)


def printpostorder(root1):
    if root1 == None:
        return
    else:
        printpostorder(root1.left)
        printpostorder(root1.right)
        print(root1.data)


def printinorder(root1):
    if root1 == None:
        return
    else:
        printinorder(root1.left)
        print(root1.data, end = " ")
        printinorder(root1.right)


def printlevelorder(root1):
    if root1 == None:
        return
    q = []
    q.append(root1)
    while q:
        count = len(q)
        while count > 0:
            n = q.pop(0)
            print(n.data, end=" ")
            if n.left is not None:
                q.append(n.left)
            if n.right is not None:
                q.append(n.right)
            count = count - 1
        print(' ')


def maximumlevelsum(root1):
    if root1 == None:
        return 0
    maxsum = 0
    q = []
    q.append(root1)

    while len(q) > 0:
        count = len(q)
        sum = 0
        while count > 0:
            n = q.pop(0)
            sum = sum + n.data
            if n.left:
                q.append(n.left)
            if n.right:
                q.append(n.right)
            count = count - 1
        print("sum is ", sum)
        # maxsum = max(sum, maxsum)
    # print("Maximum level sum is", maxsum)
    return


def printleafnode(root1):
    if root1 == None:
        return
    if root1.left == None and root1.right == None:
        print(root1.data)
        return
    if root1.left != None:
        printleafnode(root1.left)

    if root1.right != None:
        printleafnode(root1.right)


def insert(root1, value):
    if root1 == None:
        root1 = newNode(value)
        return root1
    if root1.data < value:
        root1.right = insert(root1.right, value)
    if root1.data > value:
        root1.left = insert(root1.left, value)
    return root1


def deleteTree(root1):
    if root1 == None:
        return
    else:
        deleteTree(root1.left)
        deleteTree(root1.right)
        del root1
        return


def size(root1):
    if root1 is None:
        return 0
    else:
        left = size(root1.left)
        right = size(root1.right)
        return 1 + left + right


def fullnode(root1):
    if root1 == None:
        return 0
    count = 0
    if root1.left and root1.right:
        count = count + 1
    left = fullnode(root1.left)
    right = fullnode(root1.right)
    count = count + left + right
    return count


def halfnode(root1):
    if root1 == None:
        return 0
    count = 0
    if (root1.left and root1.right is None) or (root1.left is None and root1.right):
        count = count + 1
    left = halfnode(root1.left)
    right = halfnode(root1.right)
    count = count + left + right
    return count





root1 = newNode(1)
root1.left = newNode(2)
root1.right = newNode(3)
root1.left.left = newNode(4)
root1.left.right = newNode(5)
root1.right.left = newNode(6)
root1.right.right = newNode(7)

root2 = newNode(1)
root2.left = newNode(2)
root2.right = newNode(3)
root2.left.left = newNode(4)
root2.right.left = newNode(5)
root2.right.right = newNode(6)
# root2.right.right.right = Node(8)

root3 = newNode(1)
root3.left = newNode(3)
root3.right = newNode(2)
root3.left.left = newNode(7)
root3.left.right = newNode(6)
root3.right.left = newNode(5)
root3.right.right = newNode(4)

"""
I= identicalTree(root1, root2)
if I == True:
 print("Both the binary trees are identical");
else:
 print("Both the binary trees are not identical");
"""

# S= sum(root1)
# print(S)

# h = height(root1)
# print(h)
# m= treemax(root1)
# print(m)
"""
E = existinTree(root1, 8)
if E == True:
  print("Value exist in Tree");
else:
 print("Value does not exist in Tree");

"""
# printleafnode(root1)
# insert(root1, 10)

"""
print("Preorder traversal of binary tree is")
printpreorder(root1)
print("Postorder traversal of binary tree is")
printpostorder(root1)
print("Inorder traversal of binary tree is")
printinorder(root1)
"""

# deleteTree(root1)

# print(size(root1))
# print(fullnode(root1))
# print(halfnode(root2))
# mirror(root1)
"""
if MirrorTree(root1, root3):
    print("Trees are Mirror")
else:
    print("Trees are not Mirror")
"""

# print("Levelorder traversal of binary tree is")
# printlevelorder(root1)
# print(maximumlevelsum(root1))

print("Inorder traversal of binary tree is")
printinorder(root1)

