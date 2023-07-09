type QueryStatus = 'idle' | 'loading' | 'error' | 'success'

export type QueryState<T = unknown, E = unknown> = {
  data: T | undefined
  dataUpdatedAt: number
  error: E | null
  errorUpdatedAt: number
  failureCount: number
  errorUpdateCount: number
  isError: boolean
  isFetched: boolean
  isFetchedAfterMount: boolean
  isFetching: boolean
  isIdle: boolean
  isLoading: boolean
  isLoadingError: boolean
  isPlaceholderData: boolean
  isPreviousData: boolean
  isRefetchError: boolean
  isRefetching: boolean
  isStale: boolean
  isSuccess: boolean
  status: QueryStatus
}