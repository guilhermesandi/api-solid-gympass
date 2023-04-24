import { expect, describe, it, beforeEach } from 'vitest'
import { CreateGymUseCase } from './create-gym'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('should be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: 'JavaScript Gym',
      description: null,
      phone: null,
      latitude: -19.9224853,
      longitude: -43.9913397,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
