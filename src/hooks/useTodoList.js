'use client'
import useSWR from 'swr'
import axios from 'axios'


const fetcher = url => axios.get(url).then(res => res.data)

export const useTodoList = () => {
    const { data: todoList, error } = useSWR('/api/database', fetcher)

    return {
        todoList: todoList,
        isLoading: !error && !todoList,
        isError: error
    }
}
