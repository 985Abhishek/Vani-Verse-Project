import React from 'react'
import { FormProvider as Form } from 'react-hook-form'
import PropTypes from 'prop-types';


FormProvider.propTypes = {
  children: PropTypes.node,
  methods: PropTypes.object,
  onSubmit: PropTypes.func,
};


export default function FormProvider ({children, onSubmit, methods})  {
  return (
   <Form {...methods}>
    <form onSubmit={onSubmit}>{children}</form>

   </Form>
  )
}

  