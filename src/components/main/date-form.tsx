'use client'

import type { Countdown } from '@prisma/client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState } from 'react'

interface DateFormProps {
  type: 'create' | 'edit'
  data?: Countdown
  onSubmit: (data: { title: string, timestamp: string, description: string, type: number }) => void
}

export default function DateForm({ type, data, onSubmit }: DateFormProps) {
  const [title, setTitle] = useState(data?.title || '')
  const [timestamp, setTimestamp] = useState(data?.timestamp ? new Date(data.timestamp).toISOString().slice(0, 16) : '')
  const [description, setDescription] = useState(data?.description || '')
  const [countdownType, setCountdownType] = useState(data?.type?.toString() || '1')
  const [open, setOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      title,
      timestamp: new Date(timestamp).toISOString(),
      description,
      type: Number(countdownType),
    })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {type === 'create'
          ? (
              <Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
                新建倒计时
              </Button>
            )
          : (
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                  <path d="m15 5 4 4" />
                </svg>
              </Button>
            )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{type === 'create' ? '新建倒计时' : '编辑倒计时'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>标题</Label>
            <Input
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>时间</Label>
            <Input
              type="datetime-local"
              value={timestamp}
              onChange={e => setTimestamp(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>描述</Label>
            <Input
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>类型</Label>
            <Select value={countdownType} onValueChange={setCountdownType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">普通倒计时</SelectItem>
                <SelectItem value="2">纪念日</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            {type === 'create' ? '创建' : '保存'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
