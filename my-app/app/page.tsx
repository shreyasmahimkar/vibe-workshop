import React from "react";

export default function KanbanBoard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Kanban Board</h1>
      <div className="flex gap-4 w-full max-w-5xl">
        {/* Column 1 */}
        <div className="flex flex-col bg-white rounded shadow-md p-4 w-1/3">
          <h2 className="text-lg font-semibold mb-4">To Do</h2>
          <div className="bg-gray-200 p-2 rounded mb-2">Task 1</div>
          <div className="bg-gray-200 p-2 rounded mb-2">Task 2</div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col bg-white rounded shadow-md p-4 w-1/3">
          <h2 className="text-lg font-semibold mb-4">In Progress</h2>
          <div className="bg-gray-200 p-2 rounded mb-2">Task 3</div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col bg-white rounded shadow-md p-4 w-1/3">
          <h2 className="text-lg font-semibold mb-4">Done</h2>
          <div className="bg-gray-200 p-2 rounded mb-2">Task 4</div>
        </div>
      </div>
    </div>
  );
}
