import React, { useState } from 'react'
import { Stack, Input, Select, Textarea, Button } from "@chakra-ui/core";

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
  const [itemType, setItemType] = useState('')
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [status, setStatus] = useState('')
  const [user, setUser] = useState('')
  const [department, setDepartment] = useState('')
  const [itemName, setItemName] = useState('')
  const [serialNo, setSerialNo] = useState('')
  const [tag, setTag] = useState('')
  const [comments, setComments] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(
      itemType
      , brand
      , model
      , status
      , user
      , department
      , itemName
      , serialNo
      , tag
      , comments)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack width="30%" m={3}>
        <Input
          value={itemName}
          onChange={e => setItemName(e.target.value)}
          placeholder="Item Name"
        />
        <Select
          id="itemType"
          placeholder="Select your item type"
          value={itemType}
          onChange={e => setItemType(e.target.value)}
        >
          <option value="laptop">Laptop</option>
          <option value="monitor">Monitor</option>
          <option value="desktop">Desktop</option>
        </Select>
        <Select
          id="brand"
          placeholder="Select the brand"
          value={brand}
          onChange={e => setBrand(e.target.value)}
        >
          <option value="lenovo">Lenovo</option>
          <option value="dell">Dell</option>
          <option value="hp">HP</option>
        </Select>
        <Select
          id="model"
          placeholder="Select the item model"
          value={model}
          onChange={e => setModel(e.target.value)}
        >
          <option value="thinkpad">Thinkpad</option>
          <option value="t580">T580</option>
          <option value="t460">T460</option>
        </Select>
        <Select
          id="status"
          placeholder="Select the item status"
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option value="in-use">In Use</option>
          <option value="available">Available</option>
          <option value="defective">Defective</option>
        </Select>
        <Select
          id="user"
          placeholder="Select the user"
          value={user}
          onChange={e => setUser(e.target.value)}
        >
          <option value="mike-miller">Mike Miller</option>
          <option value="john-smith">John Smith</option>
          <option value="marky-mark">Marky Mark</option>
        </Select>
        <Select
          id="department"
          placeholder="Select the department"
          value={department}
          onChange={e => setDepartment(e.target.value)}
        >
          <option value="hr">HHRR</option>
          <option value="finance">Finance</option>
          <option value="prod">Production</option>
          <option value="it">IT</option>
        </Select>
        <Input value={serialNo} onChange={e => setSerialNo(e.target.value)} placeholder="Serial No." />
        <Input value={tag} onChange={e => setTag(e.target.value)} placeholder="Tag" />
        <Textarea value={comments} onChange={e => setComments(e.target.value)} placeholder="Comments" />
        <Button type="submit" variantColor="green" size="md">Submit</Button>
      </Stack>
    </form>
  )
}


export default ItemEntry
