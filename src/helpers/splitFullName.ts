import { FullName } from "@/types"

export const splitFullName = (name: string): FullName => {
    const nameSplitted = name.trim().split(' ')
    return {
        firstName: nameSplitted[0],
        lastName: nameSplitted[1],
    }
}