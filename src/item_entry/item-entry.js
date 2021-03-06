import React, { useState, Fragment } from 'react'
import {
  Stack, Input, Select, Textarea, Button, FormControl, Tag,
  TagLabel,
  TagCloseButton
} from "@chakra-ui/core";

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
  const [tags, setTags] = useState([])
  const [comments, setComments] = useState('')

  const clearForm = () => {
    setItemType('')
    setBrand('')
    setModel('')
    setStatus('')
    setUser('')
    setDepartment('')
    setItemName('')
    setSerialNo('')
    setTags([])
    setComments('')
  }

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
      , tags
      , comments)
    clearForm()
  }

  const handleTags = (e) => {
    e.preventDefault()
    if (e.key === 'Enter' && e.target.value !== '') {
      setTags([...tags, e.target.value])
      e.target.value = ''
    }
  }

  const disableSubmitOnEnter = (e) => {
    if (e.which === 13 /* Enter */) {
      e.preventDefault();
    }
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit} onKeyPress={disableSubmitOnEnter}>
        <Stack width="30%" m={3}>
          <Input
            value={itemName}
            onChange={e => setItemName(e.target.value)}
            placeholder="Item Name"
          />
          <FormControl isRequired>
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
          </FormControl>
          <FormControl isRequired>
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
          </FormControl>
          <FormControl isRequired>
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
          </FormControl>
          <FormControl isRequired>
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
          </FormControl>
          <FormControl isRequired>
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
          </FormControl>
          <FormControl isRequired>
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
          </FormControl>
          <FormControl>
            <Input value={serialNo} onChange={e => setSerialNo(e.target.value)} placeholder="Serial No." />
          </FormControl>
          <Textarea value={comments} onChange={e => setComments(e.target.value)} placeholder="Notes" />
          <Input onKeyUp={e => handleTags(e)} placeholder="Tag" />
          <Stack spacing={4} isInline>
            {tags.map((tag, i) => (
              <Tag
                size="xs"
                key={i}
                rounded="full"
                variant="solid"
                variantColor="cyan"
              >
                <TagLabel>{tag}</TagLabel>
                <TagCloseButton />
              </Tag>
            ))}
          </Stack>
          <Button type="submit" variantColor="green" size="md">Submit</Button>
        </Stack>
      </form>
    </Fragment>
  )
}


export default ItemEntry
