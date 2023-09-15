  // Get the input element for the "Add Task" field
  var taskInput = document.getElementById("taskInput");

  // Add an event listener to the "Save" button
  document.getElementById("saveButton").addEventListener("click", function () {
      // Get the input value
      var taskText = taskInput.value.trim();

      if (taskText === "") {
          alert("Please add a task.");
          return;
      }

      // Create a new row in the table
      var table = document.getElementById("taskTable");
      var newRow = table.insertRow(table.rows.length);

      // Create cells for the new row
      var checkboxCell = newRow.insertCell(0);
      var taskCell = newRow.insertCell(1);
      var saveCell = newRow.insertCell(2);
      var removeCell = newRow.insertCell(3);

      // Add the custom checkbox to the checkbox cell
      checkboxCell.innerHTML = `
          <label class="custom-checkbox">
              <input type="checkbox" />
              <span class="checkmark"></span>
          </label>
      `;

      // Add the task text to the task cell as an input field for editing
      var taskInputField = document.createElement("input");
      taskInputField.type = "text";
      taskInputField.value = taskText;
      taskInputField.className = "editable-task";
      taskCell.appendChild(taskInputField);

      var saveButton = document.createElement("button");
      saveButton.className = "save";
      saveButton.textContent = "Save";
      saveButton.style.display = "none"; 
      saveButton.style.backgroundColor = "green"; 
      // background-color hover effect
      saveButton.onmouseover = function () {
          saveButton.style.backgroundColor = "darkgreen";
      }
      saveButton.onmouseout = function () {
          saveButton.style.backgroundColor = "green";
      }
      saveButton.style.borderRadius = "5px"; 
      saveButton.style.color = "white"; 
      saveCell.appendChild(saveButton);

      // Add a remove button to the remove cell
      var removeButton = document.createElement("button");
      removeButton.className = "delete";
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", function () {
          // Remove the parent row when the "Remove" button is clicked
          table.deleteRow(newRow.rowIndex);
      });
      removeCell.appendChild(removeButton);

      // Clear the input field for adding new tasks
      taskInput.value = "";
      // Show the save button and enable the input field for editing when clicking the input
      taskInputField.addEventListener("click", function () {
          taskInputField.style.border = "1px solid #ccc";
          taskInputField.style.pointerEvents = "auto";
          saveButton.style.display = "block";
          saveButton.classList.add("active");
      });

      // Add an event listener to the save button for saving the edited task
      saveButton.addEventListener("click", function () {
          // Hide the save button and exit "Edit Task" mode
          saveButton.style.display = "none";
          taskInputField.style.border = "1px solid #ccc";
          taskInputField.style.pointerEvents = "auto";
          saveButton.classList.remove("active");
      });
  });