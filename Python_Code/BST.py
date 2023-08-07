class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


def newNode(data):
    node = Node(data)
    return node


def insert(root, value):
    if root == None:
        root = newNode(value)
        return root
    if root.data < value:
        root.right = insert(root.right, value)
    if root.data > value:
        root.left = insert(root.left, value)
    return root


def printpreorder(root):
    if root == None:
        return
    else:
        print(root.data)
        printpreorder(root.left)
        printpreorder(root.right)


def search(root, value):
    if root is None:
        return False
    if root.data == value:
        return True
    if root.data > value:
        return search(root.left, value)
    else:
        return search(root.right, value)

def deletenode(root, value):
    if root == None:
       return root
    if root.data > value:
        root.left = deletenode(root.left, value)
    elif root.data < value:
        root.right = deletenode(root.right, value)
    else:
        if root.left == None and root.right == None:
            return None
        if root.right == None:
            return root.left
        if root.left == None:
            return root.right

        min_value = min_value_in_rightsubtree(root.right)
        root.data = min_value.data
        root.right = deletenode(root.right, min_value.data)
    return root

def min_value_in_rightsubtree(root):

    while root.left != None:
        root = root.left
    return root





root = newNode(5)
insert(root, 10)
insert(root, 6)
insert(root, 7)
root = insert(root, 12)
root = insert(root, 13)

#printpreorder(root)
"""
if search(root, 12):
    print("Value exist in Tree");
else:
    print("Value does not exist in Tree");
"""

#deletenode(root, 12)




