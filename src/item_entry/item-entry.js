import React from 'react'
import { Stack, Input, Select, Textarea } from "@chakra-ui/core";

// item [table]
// id
// type_id
// brand_id
// model_no
// serial_no
// tag
// brand_id
// type_id

const ItemEntry = () => {
  return (
    <Stack width="30%" m={3}>
      <Input placeholder="Item Name" />
      <Select placeholder="Select item type">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Select placeholder="Select brand">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Select placeholder="Select model">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Select placeholder="Select status">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Select placeholder="Select user">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Select placeholder="Select department">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Input placeholder="Serial No." />
      <Input placeholder="Tag" />
      <Textarea placeholder="Comments" />
    </Stack>
  )
}


export default ItemEntry
