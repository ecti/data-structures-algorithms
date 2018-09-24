import math

class MaxHeap:
    def __init__(self, input = []):
        self.heap = input
        self.__construct()

    def __construct(self):
        length = len(self.heap) // 2

        for i in range(length, -1, -1):
            self.__heapifyDown(i)
        

    def __heapifyUp(self, index = None):
        if not index:
            index = len(self.heap) - 1
        
        while index >= 0:
            if (index % 2): # odd
                parent = (index - 1) // 2
            else: # even
                parent = (index - 2) // 2
            
            if self.heap[index] > self.heap[parent]:
                self.heap[index], self.heap[parent] = self.heap[parent], self.heap[index]
                index = parent
            else:
                return


    def __heapifyDown(self, index = 0):
        while index < len(self.heap):
            left = (2 * index) + 1
            right = (2 * index) + 2
            val = self.heap[index]

            if left >= len(self.heap) and right >= len(self.heap):
                return

            if right < len(self.heap) and self.heap[right] > self.heap[left] and self.heap[right] > val:
                self.heap[index], self.heap[right] = self.heap[right], self.heap[index]
                index = right
            elif self.heap[left] > val:
                self.heap[index], self.heap[left] = self.heap[left], self.heap[index]
                index = left
            else:
                return


    def insert(self, value):
        self.heap.append(value)
        self.__heapifyUp()


    def pop(self):
        maximum = self.heap[0]
        self.heap[0] = self.heap.pop()
        self.__heapifyDown()
        return maximum
        

    def replace(self, value):
        maximum = self.heap[0]
        self.heap[0] = value
        self.__heapifyDown()
        return maximum


    def peek(self):
        return self.heap[0]


    def isEmpty(self):
        return len(self.heap) == 0


    def size(self):
        return len(self.heap)


# Example
maxHeap = MaxHeap([3, 13, 21, 5, 8, 10, 16])

print(maxHeap.insert(15))

# [21, 13, 16, 5, 8, 10, 3]
print(maxHeap.heap)

# 21
# [16, 13, 10, 5, 8, 3]
# print(maxHeap.pop())
# print(maxHeap.heap)
