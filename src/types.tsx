
export type MenuItem = 'home' | "skills" | "projects" | "contact"

export interface Props {
  page: MenuItem
  setPage?: (item:MenuItem)=> void
}