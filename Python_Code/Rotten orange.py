r = int(input("Enter no. of rows:"))
c = int(input("Enter no. of columns:"))
Matrix = []
for i in range(r):
    List = []
    for j in range(c):
        k = int(input())
        List.append(k)
    Matrix.append(List)

#Matrix = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]


def rotten_orange(Matrix):
    r, c = len(Matrix), len(Matrix[0])
    rotten = []
    fresh = []
    dirs = [(-1, 0), (0, 1), (1, 0), (0, -1)]
    time = 0
    for i in range(r):
        for j in range(c):
            if Matrix[i][j] == 2:
                rotten.append((i, j, time))
            elif Matrix[i][j] == 1:
                fresh.append((i, j))
    while rotten:
        i, j, time = rotten.pop(0)
        for dx, dy in dirs:
            if 0 <= i + dx < r and 0 <= j + dy < c and Matrix[i + dx][j + dy] == 1:
                Matrix[i + dx][j + dy] = 2
                fresh.remove((i + dx, j + dy))
                rotten.append((i + dx, j + dy, time + 1))

    return time if not fresh else -1


print(rotten_orange(Matrix))
