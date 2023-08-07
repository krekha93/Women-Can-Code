# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
#
#
# def middleNode( head: ListNode) -> ListNode:
#     slow = fast = head
#     while fast and fast.next:
#         slow = slow.next
#         fast = fast.next.next
#     return slow
#
# head = [1, 2, 3, 4, 5]
# print(middleNode( head))

def pattern2(number):
    star = 1
    for i in range(0, number):
        for j in range(0, number-i):
            print(" ", end=" ")
        for j in range(0, star ):
            print("*", end=" ")
        star = star +1
        print()

n = 5
pattern2(n);


