import React, { createContext, useState, useEffect, useContext } from 'react'
import { CollectionContext } from 'contexts/CollectionContext'
import { List, Avatar, Popover, Button } from 'antd'
import './styles.css'

const ListCollection = () => {
  const { myCollection } = useContext(CollectionContext)

  return (
    <div className="collectionList">
      <List
        itemLayout="horizontal"
        dataSource={myCollection}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`${item.image_uris.small}`} />}
              title={
                <Popover
                  content={<img src={`${item.image_uris.border_crop}`} />}
                  title={item.name}
                  placement="right"
                >
                  <Button>{item.name}</Button>
                </Popover>
              }
              description={`${
                item.flavor_text ? item.flavor_text : 'No flavor text...'
              }`}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default ListCollection
