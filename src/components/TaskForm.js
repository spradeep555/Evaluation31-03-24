
import React from 'react';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react'; 

function TaskForm() {
  return (
    <div>
      <h1>Task Form</h1>
      <form>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input type="text" placeholder="Enter title" />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input type="text" placeholder="Enter description" />
        </FormControl>
        <FormControl>
          <FormLabel>Due Date</FormLabel>
          <Input type="date" />
        </FormControl>
        <FormControl>
          <FormLabel>Status</FormLabel>
          <Input type="text" placeholder="Enter status" />
        </FormControl>
        <Button type="submit" colorScheme="blue">Submit</Button>
      </form>
    </div>
  );
}

export default TaskForm;
