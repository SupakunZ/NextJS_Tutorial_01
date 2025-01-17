'use client'

import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

const Dashboard = () => {

  /** Fetch Data ข้อมูลวิธีที่ 1 ( แบบปกติ )*/
  // const [data, setData] = useState([])
  // const [err, setErr] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, { cache: 'no-cache' })
  //     const data = await res.json()
  //     if (!res.ok) {
  //       return setErr(true)
  //     }

  //     setData(data)
  //     setIsLoading(false)
  //   }
  //   getData()
  // }, [])

  /** Fetch Data ข้อมูลวิธีที่ 2 ( ใช้ libraly Hook SWR )  */
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  console.log(data)
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard