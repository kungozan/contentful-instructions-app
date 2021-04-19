import React, { useState, useEffect } from 'react';
import { Flex, Textarea, Button } from '@contentful/forma-36-react-components';
import { FieldExtensionSDK } from '@contentful/app-sdk';

interface FieldProps {
  sdk: FieldExtensionSDK;
}

const Field = ({ sdk }: FieldProps) => {
  const [instructions, setInstructions] = useState<string[]>(sdk.field.getValue())

  useEffect(() => {
    sdk.window.startAutoResizer()

    return () => {
      sdk.window.stopAutoResizer()
    }
  }, [sdk.window])

  useEffect(() => {
    sdk.field.setValue(instructions)
  }, [instructions, sdk.field])

  const handleAdd = () => {
    setInstructions([...instructions, ''])
  }

  const handleRemove = (index: number) => {
    const newInstructions = [...instructions]
    newInstructions.splice(index, 1)
    setInstructions(newInstructions)
  }

  const handleChange = (value: string, index: number) => {
    const newInstructions = [...instructions]
    newInstructions[index] = value
    setInstructions(newInstructions)
  }

  return <>
    {instructions.length > 0 && instructions.map((instruction, index) => <Flex className="f36-margin-bottom--m" alignItems="center">
      <Textarea
        value={instruction}
        onChange={event => handleChange(event.target.value, index)}
      />
      <Button
        className="f36-margin-left--m"
        onClick={() => handleRemove(index)}
        icon="Delete"
        size="small"
        buttonType="muted"
      ></Button>
    </Flex>)}

    <Button
      onClick={handleAdd}
      icon="Plus"
      size="small"
      buttonType="muted"
    >Add instruction</Button>
  </>
};

export default Field;
