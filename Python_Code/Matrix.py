r = int(input("Enter no. of rows:"))
c = int(input("Enter no. of columns:"))
Matrix = []
for i in range(r):
    List = []
    for j in range(c):
        k = int(input())
        List.append(k)
    Matrix.append(List)
# print(Matrix)

for i in range(r):
    for j in range(c):
        print(Matrix[i][j], end=" ")
    print()



# Print Matrix Diagonally
"""
for k in range(0, r):
    i = k
    j = 0
    while i >= 0:
        print(Matrix[i][j], end=" ")
        i = i - 1;
        j = j + 1;
    print()

for k in range(1, c):
    i = r - 1
    j = k
    while j <= c - 1:
        print(Matrix[i][j], end=" ")
        i = i - 1;
        j = j + 1;
    print()
"""
"""
# Print Matrix in spiral form/clockwise

row = 0
col = 0
while row < r and col < c:
    for i in range(col, c):
        print(Matrix[row][i], end=" ")
    row = row + 1
    for i in range(row, r):
        print(Matrix[i][c - 1], end=" ")
    c = c - 1
    if row < r:
     for i in range(c - 1, col - 1, -1):
            print(Matrix[r - 1][i], end=" ")
     r = r - 1
    if col < c:
      for i in range(r - 1, row - 1, -1):
            print(Matrix[i][col], end=" ")
      col = col + 1

"""
"""
# Print Matrix in spiral form/Anticlockwise
row = 0
col = 0
while row < r and col < c:
    for i in range(row, r):
        print(Matrix[i][col], end=" ")
    col = col + 1
    for i in range(col, c):
        print(Matrix[r - 1][i], end=" ")
    r = r - 1
    if col < c:
        for i in range(r - 1, row - 1, -1):
            print(Matrix[i][c - 1], end=" ")
        c = c - 1
    if row < r:
        for i in range(c - 1, col - 1, -1):
            print(Matrix[row][i], end=" ")
        row = row + 1
"""
# Rotate Matrix 90 degree clockwise
"""
T= [[0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]]
for i in range(r):
    for j in range(c):
        T[j][i] = Matrix[i][j]
for i in range(len(T)):
    temp = T[i][0]
    T[i][0] = T[i][len(T[0])-1]
    T[i][len(T[0])-1] = temp
for i in range(len(T)):
    for j in range(len(T[0])):
        print(T[i][j], end= " ")
    print()
"""


