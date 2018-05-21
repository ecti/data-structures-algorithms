class Solution:
    def __init__(self):
        self.result = []

    def solveNQueens(self, n):
        self.findQueens(n)
        print(self.result)

    def findQueens(self, n, queens = [], frontDiagonals = [], backDiagonals = []):
        if len(queens) == n:
            return self.result.append(queens)
        
        p = len(queens)
        
        for q in range(n):
            if q not in queens and (p + q) not in frontDiagonals and (p - q) not in backDiagonals:
                self.findQueens(n, queens + [q], frontDiagonals + [p + q], backDiagonals + [p - q])
                

solution = Solution()
solution.solveNQueens(4)