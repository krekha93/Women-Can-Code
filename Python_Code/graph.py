from queue import Queue
from queue import LifoQueue


class Graph:
    def __init__(self, Nodes):
        self.nodes = Nodes
        self.graph = {}

        for node in self.nodes:
            self.graph[node] = []

    def edge(self, a, b):
        self.graph[a].append(b)
        self.graph[b].append(a)

    def print_graph(self):
        for node in self.nodes:
            print(node, "=", self.graph[node])

    def bfs(self, source):
        queue = Queue()
        visited = []
        queue.put(source)
        visited.append(source)

        while queue:
            vertex = queue.get()
            print(vertex, end=" ")
            for i in self.graph[vertex]:
                if i not in visited:
                    visited.append(i)
                    queue.put(i)

    def dfs(self, source):
        stack = LifoQueue()
        visited = []
        stack.put(source)
        visited.append(source)
        while stack:
            vertex = stack.get()
            print(vertex, end=" ")
            for i in reversed(self.graph[vertex]):
                if i not in visited:
                  stack.put(i)
                  visited.append(i)

    def detect_cycle(self, visited, source, parent_node):
        visited.append(source)
        for neighbour in self.graph[source]:
            if neighbour not in visited:
               if self. detect_cycle(visited, neighbour, source):
                    return True
            elif neighbour != parent_node:
                return True
        return False

    visited = []

    def dfs_rec(self, visited, source):
         if source not in visited:
            print(source, end=" ")
            visited.append(source)
            for neighbour in self.graph[source]:
                 self.dfs_rec(visited, neighbour)


nodes = []
n = int(input("Enter number of elements : "))
for i in range(0, n):
    ele = int(input())

    nodes.append(ele)
# nodes = ['1', '2', '3', '4', '5']
graph = Graph(nodes)
graph.edge(1, 2)
graph.edge(1, 3)
graph.edge(1, 5)
graph.edge(2, 4)
graph.edge(3, 4)
graph.edge(3, 5)
graph.edge(5, 6)
#graph.print_graph()
graph.bfs(1)
#graph.dfs_rec(graph.visited, 1)
graph.dfs(1)
