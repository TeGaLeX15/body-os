# TODO

- [x] Создать repository слой (localStorage-пока) для progress workouts
- [x] Создать features/progress/model/useProgressData.ts: возвращает { workouts, total } и загружает данные безопасно (useEffect)


- [ ] Обновить app/progress/page.tsx: только orchestrator, передаёт workouts props вниз

- [ ] Превратить UI-компоненты Progress в pure: убрать getWorkouts изнутри и заменить на props
  - [ ] StatsOverview
  - [ ] InsightCards
  - [ ] MuscleBalance
  - [ ] WeeklyBreakdown
  - [ ] ProgressChart
  - [ ] Heatmap
- [ ] Убрать локальные типы WorkoutEntry из UI и использовать тип из features/workout/model/workout.types.ts
- [ ] Проверить engine (insightEngine.ts) не трогает storage

- [ ] Запустить lint/build и проверить отсутствие hydration warnings

