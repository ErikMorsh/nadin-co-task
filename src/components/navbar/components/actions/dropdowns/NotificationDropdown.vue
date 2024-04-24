<template>
    <v-menu offset="10" :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <v-btn variant="text" icon color="BandW" v-bind="props">
                <v-badge content="8" color="error">
                    <v-icon size="25">mdi-bell-ring-outline</v-icon>
                </v-badge>
            </v-btn>
        </template>
        <v-card class="pa-5 bg-backgroundSecondary" min-width="400" max-height="400">
            <template v-for="(item, index) in notificationsWithRelativeTime"
            :key="item.id">
                <div class="mb-5">
                    <div class="d-flex align-center">
                        <v-icon size="20">mdi-{{ item.icon }}</v-icon>
                        <p class="message ml-2">{{ item.message }}</p>
                    <v-spacer />
                    <p>{{ item.updateTimestamp }}. ago</p>
                    </div>
                </div>
                <v-divider v-if="item.separator" class="mb-5"></v-divider>
            </template>
            <v-card-actions>
                <v-btn @click="handleMenuBtn" class="w-100 font-weight-bold text-capitalize" color="primary" variant="tonal">
                    {{ displayAllNotifications ? 'Show Less Notifications' : 'Show More Notifications' }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-menu>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const baseNumberOfVisibleNotifications = 4
const displayAllNotifications = ref(false)

interface INotification {
  message: string
  icon: string
  id: number
  separator?: boolean
  updateTimestamp: Date
}

const makeDateFromNow = (timeFromNow: number) => {
  const date = new Date()
  date.setTime(date.getTime() + timeFromNow)
  return date
}

const notifications: INotification[] = [
  {
    message: '4 pending requests',
    icon: 'heart-outline',
    id: 1,
    separator: true,
    updateTimestamp: makeDateFromNow(-3 * 60 * 1000),
  },
  {
    message: '3 new reports',
    icon: 'calendar-today',
    id: 2,
    separator: true,
    updateTimestamp: makeDateFromNow(-12 * 60 * 60 * 1000),
  },
  {
    message: 'Whoops! Your trial period has expired.',
    icon: 'information-outline',
    id: 3,
    separator: true,
    updateTimestamp: makeDateFromNow(-2 * 24 * 60 * 60 * 1000),
  },
  {
    message: 'It looks like your timezone is set incorrectly, please change it to avoid issues with Memory.',
    icon: 'clock-time-nine-outline',
    id: 4,
    updateTimestamp: makeDateFromNow(-2 * 7 * 24 * 60 * 60 * 1000),
  },
  {
    message: '2 new team members added',
    icon: 'account-multiple-plus-outline',
    id: 5,
    separator: false,
    updateTimestamp: makeDateFromNow(-3 * 60 * 1000),
  },
  {
    message: 'Monthly budget exceeded by 10%',
    icon: 'trending-up',
    id: 6,
    separator: true,
    updateTimestamp: makeDateFromNow(-3 * 24 * 60 * 60 * 1000),
  },
  {
    message: '7 tasks are approaching their deadlines',
    icon: 'alarm',
    id: 7,
    separator: false,
    updateTimestamp: makeDateFromNow(-5 * 60 * 60 * 1000),
  },
  {
    message: 'New software update available',
    icon: 'cellphone-arrow-down',
    id: 8,
    separator: true,
    updateTimestamp: makeDateFromNow(-1 * 24 * 60 * 60 * 1000),
  },
].sort((a, b) => new Date(b.updateTimestamp).getTime() - new Date(a.updateTimestamp).getTime())

const TIME_NAMES = {
  second: 1000,
  minute: 1000 * 60,
  hour: 1000 * 60 * 60,
  day: 1000 * 60 * 60 * 24,
  week: 1000 * 60 * 60 * 24 * 7,
  month: 1000 * 60 * 60 * 24 * 30,
  year: 1000 * 60 * 60 * 24 * 365,
}

const getTimeName = (differenceTime: number) => {
  return Object.keys(TIME_NAMES).reduce(
    (acc, key) => (TIME_NAMES[key as keyof typeof TIME_NAMES] < differenceTime ? key : acc),
    'month',
  ) as keyof typeof TIME_NAMES
}

const notificationsWithRelativeTime = computed(() => {
  const list = displayAllNotifications.value ? notifications : notifications.slice(0, baseNumberOfVisibleNotifications)

  return list.map((item, index) => {
    const timeDifference = Math.round(new Date().getTime() - new Date(item.updateTimestamp).getTime())
    const timeName = getTimeName(timeDifference)

    let separator = false

    const nextItem = list[index + 1]
    if (nextItem) {
      const nextItemDifference = Math.round(new Date().getTime() - new Date(nextItem.updateTimestamp).getTime())
      const nextItemTimeName = getTimeName(nextItemDifference)

      if (timeName !== nextItemTimeName) {
        separator = true
      }
    }

    const updateTime = Math.round(timeDifference / TIME_NAMES[timeName])

    return {
      ...item,
      updateTimestamp: updateTime + ' ' + minimizeTimeName(timeName, updateTime),
      separator,
      timeName
    }
  })
})

function minimizeTimeName(name: string, time: number): string {
    switch (name) {
        case 'second':
            return time > 1 ? 'secs' : 'sec'
            break;
        case 'minute':
            return time > 1 ? 'mins' : 'min'
            break;
        case 'hour':
            return time > 1 ? 'hrs' : 'hr'
            break;
        case 'day':
            return time > 1 ? 'days' : 'day'
            break;
        case 'week':
            return time > 1 ? 'wks' : 'wk'
            break;
        case 'month':
            return time > 1 ? 'mns' : 'mn'
            break;
        case 'year':
            return  time > 1 ? 'yrs' : 'yr'
            break;
    
        default:
            return ''
            break;
    }
}

function handleMenuBtn(): void {
    displayAllNotifications.value = !displayAllNotifications.value
}
</script>

<style scoped>
.message {
    max-width: 250px;
}
</style>
