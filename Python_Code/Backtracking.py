"""
def permutation(a, l, r):
    if l == r:
        print(a)
    else:
        for i in range(l, r):
            a[l], a[i] = a[i], a[l]
            permutation(a, l+1, r)
            a[l], a[i] = a[i], a[l]


string = "ABC"
n = len(string)
a = list(string)
permutation(a, 0, n)
"""
Matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

path = []

def findpaths(Matrix, path, i, j):
    if not Matrix or not len(Matrix[0]):
        return
    r = len(Matrix)
    c = len(Matrix[0])
    if i == r - 1 and j == c - 1:
        print(path + [Matrix[i][j]])
        return

    path.append(Matrix[i][j])
    if 0 <= i < r and 0 <= j + 1 < c:
        findpaths(Matrix, path, i, j + 1)

    if 0 <= i + 1 < r and 0 <= j < c:
        findpaths(Matrix, path, i + 1, j)

    path.pop()


findpaths(Matrix, path, 0, 0)

def isValidCell(x, y, N):
    return not (x < 0 or y < 0 or x >= N or y >= N)

def countuniquePaths(Matrix, i, j, visited):
    N = len(Matrix)
    if i == N - 1 and j == N - 1:
        return 1
    count = 0
    visited[i][j] = True
    if isValidCell(i, j, N) and Matrix[i][j] == 1:
        if i + 1 < N and not visited[i + 1][j]:
            count += countuniquePaths(Matrix, i + 1, j,  visited)
        if i - 1 >= 0 and not visited[i - 1][j]:
            count += countuniquePaths(Matrix, i - 1, j,  visited)
        if j + 1 < N and not visited[i][j + 1]:
            count += countuniquePaths(Matrix, i, j + 1, visited)
        if j - 1 >= 0 and not visited[i][j - 1]:
            count += countuniquePaths(Matrix, i, j - 1,  visited)
    visited[i][j] = False

    return count

Matrix = [
        [1, 1, 1, 1],
        [1, 1, 0, 1],
        [0, 1, 0, 1],
        [1, 1, 1, 1]
    ]
visited = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]

print(countuniquePaths(Matrix, 0, 0, visited))