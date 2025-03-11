'use client'
import DateForm from '@/components/main/date-form'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useDate } from '@/hooks/useDate'
import { Trash } from 'lucide-react'

function Page() {
  const { data, error, isLoading, mutate } = useDate()

  const handleCreate = async (formData: { timestamp: string, description: string, type: number }) => {
    try {
      await fetch('/api/date', {
        method: 'POST',
        body: JSON.stringify(formData),
      })
      mutate()
    }
    catch (err) {
      console.error('创建失败:', err)
    }
  }

  const handleUpdate = async (id: number, formData: { timestamp: string, description: string, type: number }) => {
    try {
      await fetch('/api/date', {
        method: 'PUT',
        body: JSON.stringify({ ...formData, id }),
      })
      mutate()
    }
    catch (err) {
      console.error('更新失败:', err)
    }
  }

  const handleDelete = async (id: number) => {
    try {
      await fetch('/api/date', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
      })
      mutate()
    }
    catch (err) {
      console.error('删除失败:', err)
    }
  }

  if (error)
    return <div>failed to load</div>
  if (isLoading)
    return <div>loading...</div>

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-end mb-4">
        <DateForm type="create" onSubmit={handleCreate} />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>时间</TableHead>
            <TableHead>标题</TableHead>
            <TableHead>描述</TableHead>
            <TableHead>类型</TableHead>
            <TableHead>操作</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data.map(item => (
            <TableRow key={item.id}>
              <TableCell>{new Date(item.timestamp).toLocaleString()}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.type === 1 ? '普通倒计时' : '纪念日'}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <DateForm
                    type="edit"
                    data={item}
                    onSubmit={formData => handleUpdate(item.id, formData)}
                  />
                  <Button variant="outline" size="icon" onClick={() => handleDelete(item.id)}>
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Page
