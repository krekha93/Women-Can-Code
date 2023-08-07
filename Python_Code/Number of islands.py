# r = int(input("Enter no. of rows:"))
# c = int(input("Enter no. of columns:"))
# Matrix = []
# for i in range(r):
#     List = []
#     for j in range(c):
#         k = int(input())
#         List.append(k)
#     Matrix.append(List)
Matrix = [[1, 1, 0, 0, 0],
               [0, 1, 0, 0, 1],
               [1, 0, 0, 1, 1],
               [0, 0, 0, 0, 0],
               [1, 0, 1, 0, 1]]

# Matrix = [
#   ["1","1","1","1","0"],
#   ["1","1","0","1","0"],
#   ["1","1","0","0","0"],
#   ["0","0","0","0","0"]
# ]


def numisland(Matrix):
    r, c = len(Matrix), len(Matrix[0])
    count = 0
    for i in range(r):
        for j in range(c):
            if Matrix[i][j] == 1:
                count = count + 1
                adjacent_land(Matrix, i , j)
    return count
def adjacent_land(Matrix, i, j):
    r, c = len(Matrix), len(Matrix[0])
    if i < 0 or j < 0 or i >= r or j >= c or Matrix[i][j] != "1":
        return
    # if i >= 0 and j >= 0 and i < len(Matrix) and j < len(Matrix[i]) and Matrix[i][j] == 1:
    Matrix[i][j] = "0"
    adjacent_land(Matrix, i + 1, j)
    adjacent_land(Matrix, i - 1, j)
    adjacent_land(Matrix, i, j + 1)
    adjacent_land(Matrix, i, j - 1)
    adjacent_land(Matrix, i - 1, j + 1)
    adjacent_land(Matrix, i + 1, j + 1)
    adjacent_land(Matrix, i + 1, j - 1)
    adjacent_land(Matrix, i - 1, j - 1)


print("Number of islands is ", numisland(Matrix))
