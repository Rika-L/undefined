'use client'

import { useState } from 'react'

export default function UploadImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file)
      return

    const formData = new FormData()
    formData.append('file', file)

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })

    const res = await response.json()
    if (res.data.url) {
      setImageUrl(res.data.url)
    }
  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {imageUrl && <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />}
    </div>
  )
}
