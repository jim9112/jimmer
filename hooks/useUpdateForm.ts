import React, { useState } from 'react';

const useUpdateForm = () => {
  const [formData, setFormData] = useState<any>({});
  const updateForm = (e: React.ChangeEvent) => {
    const result = e.target as HTMLInputElement;
    setFormData({ ...formData, [result.name]: result.value });
  };

  return [updateForm, formData, setFormData];
};

export default useUpdateForm;
