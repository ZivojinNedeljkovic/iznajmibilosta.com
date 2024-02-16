import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

function SignInForm() {
  const {
    register,
    control,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: { email: '', password: '', confirmPassword: '' },
    // resolver: zodResolver(formSchema),
  })
  return <div>SignInForm</div>
}

export default SignInForm
