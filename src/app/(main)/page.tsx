'use client'
import FileUpload from '@/components/file-upload'
import { Button } from '@/components/ui/button'

function Page() {
  async function testPost() {
    const res = await (await fetch('/api/upload', { method: 'POST' })).json()
    console.log(res)
  }
  return (
    <div className="indent-8 text-xl">
      <Button onClick={testPost}>test Post</Button>
      <FileUpload />
      <p>
        <code>Undefined</code>
        {' '}
        在编程语言
        <code>JavaScript</code>
        {' '}
        中表示一个未定义的值，自动赋给刚刚声明的变量，或那些没有提供实际参数的形参。
      </p>
    </div>
  )
}

export default Page
